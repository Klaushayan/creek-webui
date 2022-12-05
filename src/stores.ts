import { writable, type Writable } from "svelte/store";

// While server determines whether the user is logged in by examining RequestEvent.locals.user, the
// loginSession is updated so all parts of the web client-side see the user and their role.
export const loginSession = <Writable<User>>writable(undefined);
export const servers = <Writable<Server[]>>writable([]);