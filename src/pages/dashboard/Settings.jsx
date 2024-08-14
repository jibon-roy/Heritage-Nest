import { useState } from "react";
import useUserEdit from "../../lib/hooks/useUserEdit";
import { swalAlert } from "../../components/actions/SwalAlert";
import useUserActions from "../../lib/hooks/useUserActions";

export default function Settings() {
  const { user } = useUserActions();
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { updateUserProfilePicture, updateUserName } = useUserEdit();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      updateUserProfilePicture(photoURL);
      updateUserName(displayName);
      swalAlert("success", "Profile Picture updated.");
    } catch (err) {
      setError(err, "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6 max-w-md mx-auto bg-blue-50 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">
        Profile Settings
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="displayName"
            className="block text-blue-700 font-medium"
          >
            Display Name
          </label>
          <input
            type="text"
            id="displayName"
            defaultValue={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="mt-1 p-2 w-full border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your display name"
          />
        </div>
        <div>
          <label htmlFor="photoURL" className="block text-blue-700 font-medium">
            Photo URL
          </label>
          <input
            type="url"
            id="photoURL"
            defaultValue={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="mt-1 p-2 w-full border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your photo URL"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}
