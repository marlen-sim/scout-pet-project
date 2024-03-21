export default function Contact() {
  const contact = {
    first: "Emet",
    last: "Shepard",
    avatar: "https://api.dicebear.com/8.x/adventurer/svg",
    github: "https://github.com/marlen-sim",
    notes: "some note",
    favorite: true,
  };

  return (
    <div>
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || undefined}
          alt="avatar image"
          width={200}
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first}
              {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
        </h1>
      </div>
    </div>
  );
}
