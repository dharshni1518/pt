import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    poster: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie added:", movie);
    navigate("/"); // Go back to dashboard after submitting
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <input type="text" name="director" placeholder="Director" onChange={handleChange} required />
        <select name="genre" onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} required />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange} required></textarea>
        <input type="url" name="poster" placeholder="Poster Image URL" onChange={handleChange} required />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default AddMovie;