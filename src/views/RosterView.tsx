import RosterDashboard from '../components/roster/RosterDashboard';

const RosterView = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">NCCPD Roster Management</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, Admin</span>
              <button 
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => {
                  // TODO: Implement logout functionality
                  window.location.href = '#/login';
                }}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="mt-8">
            <RosterDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterView;
