import { useState } from "react";

function Search() {
  const [text, setText] = useState(String);
  function test() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: "999",
        id: "1",
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: text,
      }),
    });
  }

  return (
    <div className="bg-element-bg rounded-xl">
      <div className="flex flex-row gap-6 p-4 min-h-20">
        <img
          src={"./public/user.png"}
          alt="User İmage"
          className="rounded-full w-12"
        />
        <textarea
          placeholder="Let's share what going on your mind..."
          className="w-full bg-input-bg placeholder:text-placeholde my-auto min-h-12 max-h-60  indent-3 text-white/70 rounded"
          required
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        />
        <input
          type="button"
          value="Create Post"
          onClick={() => test()}
          className="bg-button-bg text-white w-40 font-semibold rounded hover:cursor-pointer h-12 my-auto"
        />
      </div>
    </div>
  );
}

export default Search;
