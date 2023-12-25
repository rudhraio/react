import dev from "./dev";
import prod from "./prod";

const environments: any = {
    development: dev,
    prod: prod
}
const env = import.meta.env.VITE_MODE || 'development';
const configs = environments[env];

export default configs;