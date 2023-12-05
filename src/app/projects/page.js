import Link from "next/link";

const ProjectPage = () => {
    return (
        <div>
            <h1>This is my project page!</h1>
            <button className="bg-[red] text-white px-3 py-1 rounded-md">
                <Link href={"/"}>Back to home</Link>
            </button>
        </div>
    );
};

export default ProjectPage;