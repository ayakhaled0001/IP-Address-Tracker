# 🌍 IP Address Tracker

A modern, responsive IP address tracker that allows you to search for any IP address or domain and view its location on an interactive map.

![IP Address Tracker](https://img.shields.io/badge/IP%20Tracker-Live%20Demo-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)

## ✨ Features

### 🔍 **Advanced Search**
- **IP Address Search**: Enter any valid IP address to get location details
- **Domain Search**: Search by domain names to find their IP information
- **Auto-detection**: Automatically detects and shows your current IP location
- **Real-time Validation**: Instant validation for IP and domain formats

### 🗺️ **Interactive Map**
- **Live Location Mapping**: View searched locations on an interactive Leaflet map
- **Custom Markers**: Beautiful markers with location popups
- **Responsive Design**: Perfect map experience on desktop and mobile devices
- **Smooth Animations**: Smooth panning and zooming to locations

### 📊 **Detailed Information**
- **IP Address**: Display the searched IP address
- **Geolocation**: City, region, and country information
- **Timezone**: UTC timezone offset
- **ISP Details**: Internet Service Provider information

### 🎨 **Modern UI/UX**
- **Loading Skeletons**: Elegant loading states with skeleton screens
- **Toast Notifications**: User-friendly error and success messages
- **Responsive Design**: Flawless experience on all device sizes

### ⚡ **Technical Features**
- **React Context API**: Efficient state management
- **Custom Hooks**: Reusable IP tracking logic
- **Error Handling**: Comprehensive error states and user feedback
- **Performance Optimized**: Efficient re-renders and API calls
- **Type Validation**: Robust IP and domain format validation


## 📸 Screenshots

| Desktop View | Mobile View |
|--------------|-------------|
| ![Desktop](https://github.com/user-attachments/assets/f8904571-6699-4346-97d1-c65bad5b98b7)|![Mobile](https://github.com/user-attachments/assets/3c209367-ad12-442e-bc32-e34a6d1f23d0)|


## 🛠️ Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm 

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ip-address-tracker.git
   cd ip-address-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your API key**
   - Visit [IPify](https://geo.ipify.org/)
   - Sign up for a free account
   - Get your API key

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Usage

1. **Auto-detection**: The app automatically loads your current IP location when you first visit
2. **Search by IP**: Enter any valid IP address (e.g., `8.8.8.8`)
3. **Search by Domain**: Enter any domain name (e.g., `google.com`)
4. **View Results**: See detailed information and interactive map
5. **Interactive Map**: Click on markers to see location details

### Example Searches
- **IP Address**: `1.1.1.1`, `8.8.8.8`, `192.168.1.1`
- **Domains**: `github.com`, `facebook.com`, `amazon.com`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx          # Search input and form
│   ├── IPResults.jsx          # Results display component
│   └── MapComponent.jsx       # Interactive map
├── context/
│   └── IPProvider.jsx         # Global state management
├── App.jsx                    # Main application component
└── main.jsx                   # Application entry point
```

## 🔧 Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Mapping**: Leaflet with OpenStreetMap
- **UI Library**: React-loading-skeleton
- **HTTP Client**: Native Fetch API
- **Icons**: Custom SVG icons
- **Styling**: Tailwind CSS
- **State Management**: React Context + Hooks

## 🌐 API Integration

This project uses the [IPify API](https://geo.ipify.org/) for IP geolocation data:

```javascript
// API Endpoint
https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_API_KEY&ipAddress=8.8.8.8
```

## 📱 Responsive Design

- **Desktop**: Full-featured layout with side-by-side components
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Stacked layout with touch-friendly interactions

## 🐛 Troubleshooting

### Common Issues

1. **Map not loading**
   - Check if the container has proper height
   - Verify Leaflet CSS is imported

2. **API errors**
   - Verify your IPify API key is correct
   - Check network connectivity

3. **Build issues**
   - Clear node_modules and reinstall dependencies
   - Check Node.js version compatibility

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [IPify](https://geo.ipify.org/) for the geolocation API
- [Leaflet](https://leafletjs.com/) for interactive maps
- [OpenStreetMap](https://www.openstreetmap.org/) for map tiles
- [Chakra UI](https://chakra-ui.com/) for the component library
- [Vite](https://vitejs.dev/) for the build tool

## 📞 Support

If you have any questions or issues, please open an issue on GitHub.

---

**Built with ❤️ using React and modern web technologies**

⭐ Don't forget to star this repository if you found it helpful!
