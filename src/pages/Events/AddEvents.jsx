import { useState } from "react";

const PostEventPage = () => {
  const [event, setEvent] = useState({
    title: "",
    slug: "",
    category: "",
    type: "",
    status: "",
    featured: false,
    thumbnail: "",
    date: "",
    time: { start: "", end: "", timezone: "" },
    location: {
      type: "",
      venue: "",
      address: "",
      virtualPlatform: "",
      virtualLink: "",
    },
    price: {
      amount: "",
      currency: "",
      earlyBirdDiscount: false,
      earlyBirdDeadline: "",
    },
    speakers: [{ name: "", title: "", institution: "", bio: "", image: "" }],
    description: "",
    agenda: [{ time: "", title: "", duration: "" }],
    learningOutcomes: [""],
    registration: {
      status: "",
      capacity: "",
      spotsRemaining: "",
      deadline: "",
      requirementsInfo: "",
      certificateProvided: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleNestedChange = (e, parentName, childName) => {
    const { value } = e.target;
    setEvent({
      ...event,
      [parentName]: {
        ...event[parentName],
        [childName]: value,
      },
    });
  };

  const handleSpeakerChange = (e, index, field) => {
    const { value } = e.target;
    const updatedSpeakers = [...event.speakers];
    updatedSpeakers[index][field] = value;
    setEvent({ ...event, speakers: updatedSpeakers });
  };

  const handleAgendaChange = (e, index, field) => {
    const { value } = e.target;
    const updatedAgenda = [...event.agenda];
    updatedAgenda[index][field] = value;
    setEvent({ ...event, agenda: updatedAgenda });
  };

  const handleLearningOutcomeChange = (e, index) => {
    const { value } = e.target;
    const updatedLearningOutcomes = [...event.learningOutcomes];
    updatedLearningOutcomes[index] = value;
    setEvent({ ...event, learningOutcomes: updatedLearningOutcomes });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(event); // Log the event data to the console
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Post a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Event Title, Slug, Category */}
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="slug"
          placeholder="Event Slug"
          value={event.slug}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={event.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        
        {/* Type, Status, Featured */}
        <input
          type="text"
          name="type"
          placeholder="Type (Seminar, Workshop)"
          value={event.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="status"
          placeholder="Status (Upcoming, Completed)"
          value={event.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            name="featured"
            checked={event.featured}
            onChange={(e) =>
              setEvent({ ...event, featured: e.target.checked })
            }
          />
          Featured
        </label>

        {/* Thumbnail */}
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail URL"
          value={event.thumbnail}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Date & Time */}
        <h3 className="text-lg font-semibold">Time</h3>
        <input
          type="text"
          name="start"
          placeholder="Start Time"
          value={event.time.start}
          onChange={(e) => handleNestedChange(e, "time", "start")}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="end"
          placeholder="End Time"
          value={event.time.end}
          onChange={(e) => handleNestedChange(e, "time", "end")}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="timezone"
          placeholder="Timezone"
          value={event.time.timezone}
          onChange={(e) => handleNestedChange(e, "time", "timezone")}
          className="w-full p-2 border rounded"
        />

        {/* Location */}
        <h3 className="text-lg font-semibold">Location</h3>
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={event.location.venue}
          onChange={(e) => handleNestedChange(e, "location", "venue")}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={event.location.address}
          onChange={(e) => handleNestedChange(e, "location", "address")}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="virtualPlatform"
          placeholder="Virtual Platform"
          value={event.location.virtualPlatform}
          onChange={(e) => handleNestedChange(e, "location", "virtualPlatform")}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="virtualLink"
          placeholder="Virtual Link"
          value={event.location.virtualLink}
          onChange={(e) => handleNestedChange(e, "location", "virtualLink")}
          className="w-full p-2 border rounded"
        />

        {/* Price */}
        <h3 className="text-lg font-semibold">Price</h3>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={event.price.amount}
          onChange={(e) => handleNestedChange(e, "price", "amount")}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="currency"
          placeholder="Currency"
          value={event.price.currency}
          onChange={(e) => handleNestedChange(e, "price", "currency")}
          className="w-full p-2 border rounded"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            name="earlyBirdDiscount"
            checked={event.price.earlyBirdDiscount}
            onChange={(e) =>
              handleNestedChange(e, "price", "earlyBirdDiscount")
            }
          />
          Early Bird Discount
        </label>
        <input
          type="date"
          name="earlyBirdDeadline"
          placeholder="Early Bird Deadline"
          value={event.price.earlyBirdDeadline}
          onChange={(e) => handleNestedChange(e, "price", "earlyBirdDeadline")}
          className="w-full p-2 border rounded"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Post Event
        </button>
      </form>
    </div>
  );
};

export default PostEventPage;
