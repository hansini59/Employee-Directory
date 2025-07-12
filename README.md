# Employee Directory Web Interface

A modern, responsive Employee Directory application built with **HTML, CSS, JavaScript, and Freemarker templates**. This application provides a comprehensive interface for managing employee data with advanced filtering, searching, sorting, and pagination capabilities.

LINK(https://startling-liger-d26a4e.netlify.app/)

## 🚀 Features

### Core Functionality
- **Employee Management**: Complete CRUD operations (Create, Read, Update, Delete)
- **Advanced Search**: Real-time search by name or email
- **Smart Filtering**: Filter by first name, department, and role
- **Dynamic Sorting**: Sort by first name, last name, department, or role
- **Pagination**: Customizable items per page (10, 25, 50, 100)
- **Form Validation**: Comprehensive client-side validation with error handling
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Interface
- **Modern Design**: Clean, professional interface with card-based layout
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Modal Forms**: Elegant add/edit employee forms with proper validation feedback
- **Filter Sidebar**: Slide-out filter panel with intuitive controls
- **Loading States**: Visual feedback for user interactions
- **Error Handling**: Graceful error messages and validation feedback

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **Vanilla JavaScript**: Client-side functionality and DOM manipulation
- **Freemarker Templates**: Server-side template rendering for initial data
- **Responsive Design**: Mobile-first approach with CSS media queries

## 📁 Project Structure

```
employee-directory/
├── templates/
│   └── dashboard.ftlh         # Freemarker template with employee data
├── css/
│   └── style.css             # Application styles
├── js/
│   ├── data.js               # Mock employee data
│   └── app.js                # Main application logic
├── index.html                # Main HTML file (for standalone use)
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- For Freemarker functionality: Java environment with Freemarker library
- Local web server (optional, for better development experience)

### Installation & Setup

#### Option 1: Standalone HTML Version
1. **Clone or download the project files**
2. **Open `index.html` in your web browser**
3. **The application will load with mock data**

#### Option 2: Freemarker Template Version
1. **Set up a Java environment with Freemarker**
2. **Place `dashboard.ftlh` in your templates directory**
3. **Configure your server to serve static files from `css/` and `js/` directories**
4. **Pass employee data to the template using the `employees` variable**

### Mock Data Structure

The application expects employee data in the following format:

```javascript
const employees = [
    {
        id: 1,
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        department: "HR",
        role: "Manager"
    }
    // ... more employees
];
```

### Freemarker Integration

The `dashboard.ftlh` template demonstrates how to:
- Use `<#assign>` to define mock employee data
- Iterate over employees using `<#list>` directive
- Pass data to JavaScript for client-side functionality

```freemarker
<#-- Assign mock employee data -->
<#assign employees = [
    {"id": 1, "firstName": "Alice", "lastName": "Smith", ...}
]>

<#-- Render employee cards -->
<#list employees as employee>
    <div class="employee-card" data-employee-id="${employee.id}">
        <h3>${employee.firstName} ${employee.lastName}</h3>
        <!-- ... employee details -->
    </div>
</#list>
```

## 💡 Usage Guide

### Managing Employees

1. **View Employees**: The main dashboard displays all employees in a card-based grid layout
2. **Add Employee**: Click the "Add Employee" button to open the form modal
3. **Edit Employee**: Click the "Edit" button on any employee card
4. **Delete Employee**: Click the "Delete" button and confirm the action

### Search and Filter

1. **Search**: Use the search bar to find employees by name or email
2. **Filter**: Click the "Filter" button to open the sidebar with advanced filtering options
3. **Sort**: Use the sort dropdown to organize employees by different criteria
4. **Pagination**: Adjust items per page and navigate through pages

### Form Validation

The application includes comprehensive validation:
- **Required Fields**: All fields must be filled
- **Email Format**: Valid email address required
- **Real-time Feedback**: Immediate validation feedback as you type

## 🎨 Design System

### Color Palette
- **Primary**: #3182ce (Blue)
- **Success**: #22c55e (Green)
- **Danger**: #e53e3e (Red)
- **Background**: #f8fafc (Light Gray)
- **Header**: #2d3748 (Dark Gray)

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'
- **Headings**: 600 weight with proper hierarchy
- **Body Text**: 400 weight with 1.6 line height

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🔧 Technical Implementation

### State Management
- Vanilla JavaScript with object-oriented approach
- Local array for in-memory data storage
- Efficient filtering and sorting algorithms

### Performance Optimizations
- Pagination to handle large datasets
- Efficient DOM manipulation
- Event delegation for dynamic content

### Code Quality
- Modular JavaScript architecture
- Comprehensive error handling
- Clean, semantic HTML structure
- BEM-inspired CSS methodology

## 📱 Screenshots

### Desktop View - Employee Dashboard (<img width="1920" height="1080" alt="Screenshot (228)" src="https://github.com/user-attachments/assets/6a86df8b-52c3-4d99-b50f-95884a1bb73e" />)

### Mobile View - Responsive Design
*Fully responsive design optimized for mobile devices*

### Add/Edit Employee Form
*Modal form for adding and editing employee information*

### Filter Sidebar
*Advanced filtering options with department and role selection*

## 🚧 Assignment Requirements Compliance

### ✅ Technologies Used
- **HTML**: Semantic markup and structure
- **CSS**: Modern styling and responsive design
- **JavaScript**: Vanilla JS for all functionality
- **Freemarker**: Template rendering with mock data

### ✅ Core Features
- **Dashboard Page**: Employee list/grid with all required details
- **Add/Edit Form**: Complete form with validation
- **Filter/Sort/Search**: All filtering and sorting capabilities
- **Pagination**: Configurable items per page
- **Responsive Design**: Works on all device sizes

### ✅ Functionality
- **Data Handling**: Local JavaScript array with Freemarker integration
- **Form Validation**: Client-side validation with error messages
- **Error Handling**: Graceful handling of user interactions
- **No Backend**: Pure client-side implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Developer Notes

### Challenges Faced
1. **Freemarker Integration**: Balancing server-side rendering with client-side functionality
2. **Responsive Design**: Ensuring perfect layout across all device sizes
3. **Form Validation**: Implementing comprehensive validation with clear error feedback
4. **State Management**: Managing complex filtering, sorting, and pagination state

### Technical Decisions
1. **Vanilla JavaScript**: Chosen for assignment requirements and performance
2. **CSS Grid/Flexbox**: Modern layout techniques for responsive design
3. **Modal Interface**: Better UX for forms compared to separate pages
4. **Local Storage**: Simple data persistence for demonstration

### Future Enhancements
- Backend API integration
- Advanced search with highlighting
- Bulk operations and CSV export
- Drag & drop functionality
- Dark mode theme

