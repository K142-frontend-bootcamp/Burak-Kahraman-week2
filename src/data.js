import React, { useEffect, useState } from "react";

const Data = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then(({ results }) => {
        console.log("Success:", results);
        setPosts(results)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <td> User Name</td>
          <td> Height</td>
          <td> Gender</td>
          <td> Movies</td>
          <td> Delete</td>
        </tr>
      </thead>
      <tbody id="data">
        {
        posts.map((a, index) => (
          <tr key={index}>
            <td>{a.name}</td>
            <td>{a.height}</td>
            <td>{a.gender}</td>
            <td>{a.films[0]}</td>
            <td>
              <button className="deletebtn" onClick={(e,index)=>{
                e.target.parentNode.parentNode.parentNode.remove();
              }}><img src="/bin.png" width="20px" height="20px" /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Data;


