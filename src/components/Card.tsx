import "../style/components/card.scss";

const Card = ({ title, text }: { title: string, text: string }) => {
  return (
    <div className="card">
      <div className="text-container">
        <p className="title">{ title }</p>
        <article className="text">{ text }</article>
      </div>
      <svg viewBox="0 0 100 130" className="card-svg">
        <g vectorEffect="non-scaling-stroke">
          <path d="M10 2 98 2 98 120 90 128 2 128 2 10Z" className="container" vectorEffect="non-scaling-stroke" />
          <path d="M64 6 94 6 94 36M36 124 6 124 6 93" className="inner-lines" vectorEffect="non-scaling-stroke" />
          <g >
            <circle cx="80" cy="110" r="10" />
            <path 
              vectorEffect="non-scaling-stroke"
              d="M75 110 85 110 82 113M85 110 82 107Z" 
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow"
            />
          </g>
        </g>
        </svg>
    </div>
  )
}

export default Card;
