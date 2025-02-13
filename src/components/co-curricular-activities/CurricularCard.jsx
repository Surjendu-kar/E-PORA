import Link from "next/link";

export const CurricularCard = ({ item }) => {
  return (
    <div className="tpcourse tp-list-course mb-40">
      <div className="row g-0">
        <div className="col-xl-4 course-thumb-width">
          <div className="tpcourse__thumb p-relative w-img fix">
            <Link href={`/co-curricular-activities/${item.id}`}>
              <img
                src="../../../public/assets/img/course/course-sub-thumb-02.jpg"
                alt="curricular-thumb"
              />
            </Link>
          </div>
        </div>
        <div className="col-xl-8 course-text-width">
          <div className="course-list-content">
            <div className="tpcourse__category mb-10">
              <ul className="tpcourse__price-list d-flex align-items-center">
                <li>
                  <Link href="" className={item.ct_color}>
                    {item.category}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tpcourse__ava-title mb-15">
              <h4 className="tpcourse__title tp-cours-title-color">
                <Link href={`/co-curricular-activities/${item.id}`}>
                  {item.activityName}
                </Link>
              </h4>
            </div>
            <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
              <ul className="d-flex align-items-center">
                <li>
                  <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" />
                  <span>{item.coordinator}</span>
                </li>
                <li>
                  <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" />
                  <span>{item.duration}</span>
                </li>
                <li>
                  <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" />
                  <span>{item.maxParticipants}</span>
                </li>
              </ul>
            </div>
            <div className="tpcourse__rating d-flex align-items-center justify-content-between">
              <div className="tpcourse__rating-icon">
                <span>{item.date}</span>
              </div>
              <div className="tpcourse__pricing">
                <h5 className="price-title">{item.venue}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
