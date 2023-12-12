import "./Tags.scss";

export default function Tags({ tags }: { tags: string[] }): JSX.Element {
    return (
        <>
            <div className="Tags">
                {tags.map((tag: string, index: number) => {
                    return (
                        <span key={`Tags-${index}-${Math.random()}`}>{tag}</span>
                    );
                })}
            </div>
        </>
    );
}
