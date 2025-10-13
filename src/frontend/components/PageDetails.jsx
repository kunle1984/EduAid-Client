import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  CalendarDays,
} from "lucide-react";

const PageDetails = ({ event, recentPosts, tags }) => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Main Content */}
        <div className="col-lg-8">
          {/* Hero Image */}
          <div className="mb-4">
            <img
              src={event.image}
              alt={event.title}
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Event Meta */}
          <div className="d-flex flex-wrap text-muted mb-3 small">
            <div className="me-3 d-flex align-items-center">
              <CalendarDays size={16} className="me-1 text-warning" />
              {event.date}
            </div>
            <div className="d-flex align-items-center">
              <MapPin size={16} className="me-1 text-warning" />
              {event.location}
            </div>
          </div>

          {/* Event Title */}
          <h2 className="fw-bold mb-3">{event.title}</h2>

          {/* Description */}
          <p className="text-muted">{event.description}</p>

          {/* Summary */}
          <h4 className="fw-bold mt-4">Summary</h4>
          <p className="text-muted">{event.summary}</p>

          {/* Key Points */}
          <div className="row mb-4">
            {event.highlights && (
              <>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    {event.highlights.left.map((item, i) => (
                      <li key={i} className="mb-2">
                        ✅ {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    {event.highlights.right.map((item, i) => (
                      <li key={i} className="mb-2">
                        ✅ {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Gallery */}
          {event.gallery && (
            <div className="row g-3 mb-5">
              {event.gallery.map((img, i) => (
                <div key={i} className="col-md-4">
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="img-fluid rounded"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Social Share */}
          <h5 className="fw-bold mb-3">Share this event</h5>
          <div className="d-flex flex-wrap gap-2 mb-5">
            <a
              href="#"
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a
              href="#"
              className="btn btn-info text-white d-flex align-items-center gap-2"
            >
              <Twitter size={18} /> Twitter
            </a>

            <a
              href="#"
              className="btn btn-secondary d-flex align-items-center gap-2"
            >
              <Linkedin size={18} /> Linkedin
            </a>
          </div>

          {/* Google Map */}
          {event.mapEmbed && (
            <div className="mb-5">
              <iframe
                title="Event Location"
                src={event.mapEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          )}

          {/* Comments */}
          <div className="mb-5">
            <h5 className="fw-bold mb-3">Comments</h5>
            {event.comments && event.comments.length > 0 ? (
              event.comments.map((comment, index) => (
                <div key={index} className="d-flex mb-4">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="mb-1">{comment.author}</h6>
                    <p className="text-muted small mb-1">{comment.text}</p>
                    <small className="text-muted">{comment.time}</small>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted">No comments yet.</p>
            )}
          </div>

          {/* Post Comment Form */}
          <div className="mb-5">
            <h5 className="fw-bold mb-3">Post Comment</h5>
            <form>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your comment"
                ></textarea>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name*"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email*"
                  />
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="saveInfo"
                />
                <label className="form-check-label" htmlFor="saveInfo">
                  Save my name and email for next time
                </label>
              </div>
              <button type="submit" className="btn btn-dark px-4">
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Search */}
          <div className="card mb-4 p-3 shadow-sm border-0">
            <h6 className="fw-bold mb-2">Search</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          {/* Recent Posts */}
          <div className="card mb-4 p-3 shadow-sm border-0">
            <h6 className="fw-bold mb-3">Recent Posts</h6>
            {recentPosts.map((post, i) => (
              <div key={i} className="d-flex mb-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded me-3"
                  width="70"
                  height="70"
                />
                <div>
                  <small className="text-muted">{post.date}</small>
                  <p className="mb-0 fw-semibold small">{post.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="card mb-4 p-3 shadow-sm border-0">
            <h6 className="fw-bold mb-3">Tags</h6>
            <div className="d-flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="badge bg-light text-dark border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Ad Banner */}
          <div className="card p-4 text-center bg-dark text-white border-0">
            <h6 className="text-warning mb-2">{event.cta.subtitle}</h6>
            <h5 className="fw-bold mb-4">{event.cta.title}</h5>
            <button className="btn btn-warning">{event.cta.button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
