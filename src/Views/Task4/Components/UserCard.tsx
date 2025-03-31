import './user-card.css'

type Props = {
    name?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    dob?: string;
};

const UserCard = ({
    firstName,
    lastName,
    dateOfBirth,
    name,
    dob,
}: Props) => {
    const displayedName = name ? name : `${firstName} ${lastName}`
    const displayedDob = dob ? dob : dateOfBirth;
    return (
        <div className="user-card">
            <p>Name: {displayedName}</p>
            <p>DOB: {displayedDob}</p>
        </div>
    );
};
export default UserCard;
