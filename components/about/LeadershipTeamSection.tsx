"use client";
import Image from 'next/image';
import localFont from 'next/font/local';
const sora = localFont({
    src: '../../public/fonts/sora/static/Sora-Light.ttf',
    variable: '--font-sora',
    display: 'swap',
});
const teamMembers = [
    {
        name: 'Sudhir Srivastava, MD',
        role: 'Founder, Chairman and CEO',
        image: '/images/about/team/image1.webp',
    },
    {
        name: 'Frederic Moll, MD',
        role: 'Vice Chairman',
        image: '/images/about/team/image2.webp',
    },
    {
        name: 'Vishwa Srivastava, MD',
        role: 'Chief Executive Officer - APAC',
        image: '/images/about/team/image3.webp',
    },
    {
        name: 'Barry F Cohen',
        role: 'Board Member',
        image: '/images/about/team/image4.webp',
    },
    {
        name: 'Dr. Mylswamy Annadurai',
        role: 'Board Member',
        image: '/images/about/team/image5.webp',
    },
    {
        name: 'Somashekhar SP, MD',
        role: 'Board Member',
        image: '/images/about/team/image6.webp',
    },
    {
        name: 'Tim Adams',
        role: 'Board Member',
        image: '/images/about/team/image7.webp',
    },
];
export default function LeadershipTeamSection() {
    return (<section className={`sectionContainer ${sora.variable}`}>
      <div className="contentWrapper">
        <div className="header">
          <h2>Our Team</h2>
          <p>Board of directors (SS Innovations International Inc.)</p>
        </div>

        <div className="gridContainer">
          {teamMembers.map((member, index) => (<div key={index} className="card">
              <div className="imageWrapper">
                <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} sizes="328px" priority fetchPriority="high" quality={80}/>
              </div>
              <div className="textContainer">
                <h3 className="name">{member.name}</h3>
                <p className="description">{member.role}</p>
              </div>
            </div>))}
        </div>
      </div>

      <style jsx>{`
        .sectionContainer {
          width: 100%;
          padding: 80px 20px;
          background: #F4F6F8;
        }

        .contentWrapper {
          max-width: 1384px;
          margin: 0 auto;
        }

        .header {
          margin-bottom: 40px;
          text-align: left;
        }

        .header h2 {
          color: #1E1E1E;
          font-family: var(--font-sora), sans-serif;
          font-size: 48px;
          font-style: normal;
          font-weight: 800;
          line-height: var(--Number-4, 50px); /* 156.25% */
          margin-bottom: 8px;
        }

        .header p {
          font-family: var(--font-sora), sans-serif;
          font-size: 16px;
          color: #6E6E6E;
          margin: 0;
        }

        .gridContainer {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }

        .card {
          display: flex;
          width: 328px;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 8px;
          background: #FFF;
          overflow: hidden;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
        }

        .imageWrapper {
          position: relative;
          width: 100%;
          height: 328px;
        }

        .textContainer {
          padding: 12px 16px 24px 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .name {
          color: #3F3F3F;
          font-family: var(--font-sora), sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 36px;
          margin: 0;
        }

        .description {
          color: #6E6E6E;
          font-family: var(--font-sora), sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          margin: 0;
        }
      `}</style>
    </section>);
}
