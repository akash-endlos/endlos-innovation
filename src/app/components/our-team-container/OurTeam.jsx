import React from "react";
import "./our-team.css";
import Link from "next/link";

const OurTeam = ({ team }) => {
  return (
    <>
      {team.map((member) => (
        <div className="col-xl-6">
          <div className="card-deck">
            <div class="card text-center">
              <div className="our-team-image">
                <img
                  className="img-responsive w-100"
                  src={member.src}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
              <div className="d-flex gap-2 align-items-center">
              {member.linkedin ? <Link  target="_blank" href={member.linkedin} className="pointer"><img src="/images/linkedin.svg" height={25} width={25} /></Link> :""}
              {member.twitter ? <Link  target="_blank"  href={member.twitter} className="pointer"><img src="/images/twitter.svg" height={25} width={25} /></Link> :""}
              </div>
              <h5 className={`${member.linkedin ? "":"pt-4"}`}>{member.title}</h5>
              <p>{member.subtitle}</p> 
                {/* <p className={`${member.find_out_more ? "":"pt-4"}`} >{member.subtitle}</p> */}
                {/* {member.find_out_more ? <span class="our-team-member-btn"><Link href={member.link}>Find Out More</Link></span> :""} */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OurTeam;
