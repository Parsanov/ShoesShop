import { useState, useContext } from 'react';
import './user-profile.css';
import { AuthContext } from '../../Components/AuthContext/AuthContext.jsx';
import { User, Mail, Phone, Key, Save, Edit, ArrowLeft } from 'lucide-react';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.userName || "",
    email: user?.email || "",
    phone: "", 
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving user data:", formData);
    setIsEditing(false);
    setShowResetPassword(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setFormData({
        ...formData,
        name: user?.userName || "",
        email: user?.email || "",
        phone: formData.phone
      });
    }
  };

  const toggleResetPassword = () => {
    setShowResetPassword(!showResetPassword);
    if (!showResetPassword) {
      setFormData({
        ...formData,
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div className="profile-page">
      {/* Main Content */}
      <main className="profile-main">
        <div className="profile-grid">
          {/* Sidebar */}
          <div className="profile-sidebar">
            <div className="sidebar-content">
              <div className="user-photo-container">
                <div className="user-photo">
                  <User className="user-icon" />
                </div>
                <h2>{user?.userName || "User"}</h2>
                <p className="member-since">Member since 2023</p>
              </div>
              
              <div className="sidebar-menu">
                <ul>
                  <li className="active">Profile Information</li>
                  <li>Security Settings</li>
                  <li>Notification Preferences</li>
                  <li>Connected Accounts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="profile-content">
            <div className="content-section">
              <div className="section-header">
                <h3>Personal Information</h3>
                <button 
                  onClick={toggleEdit}
                  className="edit-button"
                >
                  {isEditing ? (
                    <>
                      <Save className="button-icon" />
                      Save
                    </>
                  ) : (
                    <>
                      <Edit className="button-icon" />
                      Edit Profile
                    </>
                  )}
                </button>
              </div>

              <div className="form-fields">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    {isEditing ? (
                      <div className="input-container">
                        <User className="input-icon" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                    ) : (
                      <div className="readonly-field">
                        <User className="field-icon" />
                        <span>{user?.userName || "Not set"}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label>Email Address</label>
                    {isEditing ? (
                      <div className="input-container">
                        <Mail className="input-icon" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    ) : (
                      <div className="readonly-field">
                        <Mail className="field-icon" />
                        <span>{user?.email || "Not set"}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label>Phone Number</label>
                    {isEditing ? (
                      <div className="input-container">
                        <Phone className="input-icon" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    ) : (
                      <div className="readonly-field">
                        <Phone className="field-icon" />
                        <span>{formData.phone || "Not set"}</span>
                      </div>
                    )}
                  </div>
                 
                  <div className="form-group">
                    <label>Role</label>
                    <div className="readonly-field">
                      <User className="field-icon" />
                      <span>{user?.roles?.join(", ") || "Not assigned"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Password Reset Section */}
            <div className="content-section">
              <div className="section-header">
                <div className="header-with-icon">
                  <Key className="header-icon" />
                  <h3>Password</h3>
                </div>
                <button 
                  onClick={toggleResetPassword}
                  className="secondary-button"
                >
                  {showResetPassword ? "Cancel" : "Reset Password"}
                </button>
              </div>
              
              {showResetPassword ? (
                <div className="password-reset-form">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      placeholder="Enter your current password"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Enter new password"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm new password"
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      onClick={handleSave}
                      className="primary-button"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              ) : (
                <p className="security-info">
                  Secure your account with a strong password. We recommend using a combination of uppercase and lowercase letters, numbers, and special characters.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
     
    </div>
  );
};

export default UserProfile;