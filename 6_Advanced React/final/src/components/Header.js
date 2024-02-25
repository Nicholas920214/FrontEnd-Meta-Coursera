import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Add
  /*
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollUp = currentScrollPos < prevScrollPos;

    if(scrollUp || currentScrollPos === 0) {
      setHeaderVisible(true);
    }
    else {
      setHeaderVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const prevScrollPos = 0;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  */  

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      
      //transform={`translateY(${isHeaderVisible ? "0" : "-100%"})`}
      
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={10}>
              {socials.map(({icon, url}) => (
                <a
                  key={url}
                  href={url}
                  icon={icon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon key={url} icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#" onClick={handleClick("landingpage")}>
                Home
              </a>
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contact" onClick={handleClick("contactme")}>
                Contact me
              </a>
              <a href="#blog" onClick={handleClick("blogpost")}>
                Blog
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
