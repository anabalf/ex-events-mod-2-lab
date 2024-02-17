const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
       title: {
        type: String,
        required: true,
        minLength: [3, 'Title needs at least 3 characters']
       },       
       description: {
        type: String,
        required: true,
        minLength: [10, 'Description needs at least 10 characters']
       },
       capacity: {
        type: Number,
        min: 0    
       },
       start: {
        type: Date,
        required: true,
       },
       end: {
        type: Date,
        required: true,
        validate: {
            validator: function(end) {
                return this.start <= end;
            },
            message: 'End date must be after start date'        
        }
       },
       image: {
        type: String,
        validate: {
            validator: function (value) {
                try {
                    new URL(value);
                    return true;
                } catch (error) {
                    return false;
                }
            },
            message: 'Invalid image URL'
        }
       },
       tags: {
        type: [String]
       }
    },
    { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;