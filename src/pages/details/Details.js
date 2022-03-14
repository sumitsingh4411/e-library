import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { semDetails } from "../../shared/utils/constatnt";
import "./Details.scss";
function Details() {
  const parms = useParams();
  return (
    <div className="book-details">
      <div className="book-content">
        <div className="book-details-title">
          {parms?.semId + " Semester Book Details"}
          <hr className="horizonatal-line" />
        </div>
        <div className="subject">
          {semDetails
            ?.filter((e) => e.id == parms.semId)
            .map((e) => {
              return (
                <div className="subject-details" key={e.id}>
                  {e?.books.map((book) => (
                    <div className="book_name" key={book.id}>
                      <div className="left-size">{book.name+" = "}</div>
                      <div className="right-size">
                        {book.writer.map((writer) => {
                          return <div>{writer.name}</div>;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Details;
