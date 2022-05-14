export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Forms"}</strong>
      <p>{repository?.description ?? "React Forms"}</p>
      <a href={repository?.link}>Access Repository</a>
    </li>
  );
}
