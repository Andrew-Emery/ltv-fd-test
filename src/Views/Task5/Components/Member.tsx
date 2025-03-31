import { UsersState } from "../store/usersSlice";

export const Member = (member: UsersState) => {
    return (
        <div className="member">
            <span>Name:</span> <span>{member.firstName}</span>
            <span>Age:</span> <span>20</span>
            <span>Membership:</span> <span>Gold</span>
        </div>
    );
};