import Profile from './Profile/Profile';
import data from './user.json';
import Statistics from './Statistics/Statistics';
import stats from './data';
import FriendList from './FriendList/FriendList';
import friends from './friends.json';
import Transactions from './Transactions/Transactions';
import transaction from './transactions.json';


export default function App() {
  return (
    <div>
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <Transactions items={transaction} />
    </div>
  );
}
