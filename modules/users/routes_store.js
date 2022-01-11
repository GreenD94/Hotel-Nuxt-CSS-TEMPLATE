import _routes from './routes';
export default (context, inject) => {


    _routes.forEach((route) => {
        const hasRouteCan = route.hasOwnProperty('routeCan');
        if (!hasRouteCan) { return; }
        route.routeCan.forEach(can => {
            context.store.commit("pushAuthCan", 
                {
                    path: route.path,
                    can: can
                }
            );
        });
    });

}