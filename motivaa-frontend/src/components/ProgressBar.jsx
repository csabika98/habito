export default function ProgressBar() {
    return (
        <progress className="relative w-full px-12 rounded-full before:content-['50%'] before:absolute before:left-[47%] before:transform-x-[-50%] before:text-white" max="100" value="50"></progress>
    )
}