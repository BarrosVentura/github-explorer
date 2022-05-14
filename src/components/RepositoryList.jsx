import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform2",
  description: "Forms in React JS",
  link: "https://github.com",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
