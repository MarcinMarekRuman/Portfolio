export async function getProjects() {
    const response = await fetch("http://localhost:8000/api/projects");

    if (!response.ok) {
        throw new Error("Cannot fetch projects");
    }

    return response.json();
}