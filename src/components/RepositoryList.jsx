const repositoryName = "Name inside of a variable"

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Description</p>
          <a href="">
            Access repository
          </a>
        </li>
        <li>
          <strong>Name</strong>
          <p>Description</p>
          <a href="">
            Access repository
          </a>
        </li>
        <li>
          <strong>Name</strong>
          <p>Description</p>
          <a href="">
            Access repository
          </a>
        </li>
      </ul>
    </section>
  );
}