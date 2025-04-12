
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export interface TeamMemberType {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    email: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMemberType;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden h-72">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex space-x-3 mb-3">
            <SocialIcon href={`mailto:${member.social.email}`} icon={<Mail size={18} />} />
            {member.social.facebook && (
              <SocialIcon href={member.social.facebook} icon={<Facebook size={18} />} />
            )}
            {member.social.twitter && (
              <SocialIcon href={member.social.twitter} icon={<Twitter size={18} />} />
            )}
            {member.social.linkedin && (
              <SocialIcon href={member.social.linkedin} icon={<Linkedin size={18} />} />
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold font-playfair text-royal-primary">{member.name}</h3>
        <p className="text-royal-accent mb-2">{member.position}</p>
        <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
      </div>
    </div>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/90 hover:bg-royal-secondary text-royal-primary hover:text-white p-2 rounded-full transition-colors"
  >
    {icon}
  </a>
);

export default TeamMemberCard;
