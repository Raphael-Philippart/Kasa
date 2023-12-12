import Star from "../Star/Star";
import "./Rating.scss";

export default function Rating({ rating }: { rating: string }): JSX.Element {
    return (
        <>
            <div className="Rating">
                {[...Array(5)].map((star: any, index: number) => {
                    const ratingProps = parseInt(rating);
                    const ratingValue = index + 1;

                    if (ratingProps <= ratingValue) {
                        return (<Star key={index} isFilled={true} />);
                    } else {
                        return (<Star key={index} isFilled={false} />);
                    }
                })}
            </div>
        </>
    );
}
