import { useState } from 'react';
import {
  Home,
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Settings,
  LogOut,
  Search,
  Bell,
  Plus,
  TrendingUp,
  TrendingDown,
  Eye,
  Edit,
  Trash2,
  MoreVertical
} from 'lucide-react';

export default function PropertyAdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);

  // Sample data
  const stats = [
    { 
      title: 'Total Properties', 
      value: '248', 
      change: '+12%', 
      isPositive: true,
      icon: Building2,
      color: 'bg-blue-500'
    },
    { 
      title: 'Active Listings', 
      value: '182', 
      change: '+8%', 
      isPositive: true,
      icon: Home,
      color: 'bg-green-500'
    },
    { 
      title: 'Total Users', 
      value: '1,429', 
      change: '+23%', 
      isPositive: true,
      icon: Users,
      color: 'bg-purple-500'
    },
    { 
      title: 'Pending Reviews', 
      value: '36', 
      change: '-5%', 
      isPositive: false,
      icon: FileText,
      color: 'bg-orange-500'
    }
  ];

  const properties = [
    {
      id: 1,
      name: 'Villa Ada Hato',
      location: 'Bali, Indonesia',
      price: '$2,500,000',
      status: 'Active',
      views: '1,234',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Modern Beach House',
      location: 'Seminyak, Bali',
      price: '$1,800,000',
      status: 'Active',
      views: '892',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Luxury Penthouse',
      location: 'Jakarta, Indonesia',
      price: '$3,200,000',
      status: 'Pending',
      views: '2,145',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Tropical Villa',
      location: 'Ubud, Bali',
      price: '$1,950,000',
      status: 'Active',
      views: '756',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=150&fit=crop'
    }
  ];

  const recentActivities = [
    { action: 'New property added', user: 'John Doe', time: '2 hours ago' },
    { action: 'Property status updated', user: 'Jane Smith', time: '4 hours ago' },
    { action: 'New user registered', user: 'Mike Johnson', time: '6 hours ago' },
    { action: 'Review submitted', user: 'Sarah Williams', time: '8 hours ago' }
  ];

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'properties', icon: Building2, label: 'Properties' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">PropAdmin</h1>
              <p className="text-xs text-gray-500">Property Manager</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeMenu === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 w-64 p-6 border-t">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search properties, users, reports..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {recentActivities.slice(0, 3).map((activity, index) => (
                        <div key={index} className="p-4 hover:bg-gray-50 border-b cursor-pointer">
                          <p className="text-sm text-gray-800">{activity.action}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">Admin User</p>
                  <p className="text-xs text-gray-500">admin@property.com</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`flex items-center gap-1 text-sm font-semibold ${
                      stat.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Properties Table */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Recent Properties</h3>
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  <Plus className="w-4 h-4" />
                  Add Property
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Property</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Views</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {properties.map((property) => (
                      <tr key={property.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={property.image}
                              alt={property.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-semibold text-gray-800">{property.name}</p>
                              <p className="text-sm text-gray-500">{property.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{property.price}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            property.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {property.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-1 text-gray-600">
                            <Eye className="w-4 h-4" />
                            {property.views}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-all">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-all">
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 text-gray-600 rounded-lg transition-all">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">by {activity.user}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}