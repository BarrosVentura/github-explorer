interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository?.name ?? "Forms"}</strong>
      <p>{repository?.description ?? "React Forms"}</p>
      <a href={repository?.html_url}>Access Repository</a>
    </li>
  );
}
