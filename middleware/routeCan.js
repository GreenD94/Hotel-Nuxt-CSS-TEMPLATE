export default function ({ redirect, store, $authCan, route }) {

  const fullPath = route.fullPath;
  const authCans = store.state.authCans;
  const isIgnored =authCans.every((authCan) => authCan.path != fullPath);
  if (isIgnored) {return;}

  authCans.forEach(authCan => {
    const isValidPath=fullPath == authCan.path;
    if (!isValidPath) { return;} 
    const isValidCan = $authCan(authCan.can);
    if (!isValidCan) {redirect("/");}
  });


  //.forEach(element => console.log(element));
  //console.log($routeCan());
}