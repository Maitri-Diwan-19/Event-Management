const Event = require('../models/Event');
const User = require('../models/Event');

// Create Event Controller
const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    if (!title || !description || !date) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      createdBy: req.user.id  // coming from JWT middleware
    });

    const savedEvent = await newEvent.save();

    res.status(201).json({
      success: true,
      message: 'Event created successfully!',
      event: savedEvent
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Register User to Event Controller
const registerToEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    // const userId = req.user.id;

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    // Prevent duplicate registration
    if (event.registeredUsers.includes(userId)) {
      return res.status(400).json({ success: false, message: 'Already registered for this event' });
    }

    event.registeredUsers.push(userId);
    await event.save();

    // Also update the user's document
    const User = require('../models/User');
    const user = await User.findById(userId);
    user.registeredEvents.push(eventId);
    await user.save();

    res.status(200).json({ success: true, message: 'Successfully registered for the event!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { createEvent, registerToEvent };
