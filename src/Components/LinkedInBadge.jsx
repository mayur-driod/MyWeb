import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const LinkedInBadge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Helmet ensures LinkedIn's script loads properly */}
      <Helmet>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
      </Helmet>
      
      {/* LinkedIn Badge Container */}
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="small"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="mayurksetty"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/mayurksetty?trk=profile-badge"
        >
          Mayur K Setty
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;