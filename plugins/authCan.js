export default (context, inject) => {





    const authCan = (wantedPermission) => {

        if (!context.$auth.user) { return false }
        if (context.$auth.user.roles.length == 0) { return false }
        let role = context.$auth.user.roles[0];
        if (role.permissions.length == 0) { return false }
        const isValidCan = role.permissions.some((permision) => permision.name == wantedPermission);
        return isValidCan;
    };

    const routeCan = (wantedPermission) => {
      
        if (!context.$auth.user) { return false }
        if (context.$auth.user.roles.length == 0) { return false }
        let role = context.$auth.user.roles[0];
        if (role.permissions.length == 0) { return false }

        const isValidCan = role.permissions.some((permision) => permision.name == wantedPermission);

        if (!isValidCan) {
            return context.redirect('/');
        }
    };
    // Inject $hello(msg) in Vue, context and store.
    inject('routeCan', routeCan);
    inject('authCan', authCan);

}