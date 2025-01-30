import { useState, useEffect } from "react";

const TestimonialModal = ({
  isOpen,
  onClose,
  onSubmit,
  user,
  mytestimonial,
}) => {
  const roles = ["Student", "Teacher", "Parent", "Alumni", "Other"];

  // Initialize form data with existing testimonial if available
  const [formData, setFormData] = useState({
    content: "",
    rating: 5,
    designation: user?.role || "",
  });

  // Update form when testimonial data is available
  useEffect(() => {
    if (mytestimonial) {
      setFormData({
        content: mytestimonial.content || "",
        rating: mytestimonial.rating || 5,
        designation: mytestimonial.designation || user?.role || "",
      });
    } else {
      setFormData({
        content: "",
        rating: 5,
        designation: user?.role || "",
      });
    }
  }, [mytestimonial, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const testimonialData = {
        ...formData,
        name: user.displayName,
        img: user.photoURL,
        email: user.email,
      };
      await onSubmit(testimonialData);
      onClose();
    } catch (error) {
      alert("Failed to submit testimonial. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {mytestimonial ? "Update Testimonial" : "Add Testimonial"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <h3 className="font-medium text-gray-900">{user.displayName}</h3>
            <p className="text-sm text-gray-500">Posting as yourself</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!user?.role && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Role
              </label>
              <select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select your role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating (1-5)
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Testimonial
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Share your experience..."
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[100px]"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800"
            >
              {mytestimonial ? "Update" : "Submit"} Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialModal;
