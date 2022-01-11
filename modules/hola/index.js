import path from 'path'; 
 module.exports = function UserModule (moduleOptions) { 
  	  this.extendRoutes((routes) => {  
 	 	 routes.unshift({ 
 	 	 name: 'your_route_name', 
  	 	 path: '/your_route_url', 
 	 	 component: path.resolve(__dirname, 'pages/your_view_name.vue') 
 	 });}); }