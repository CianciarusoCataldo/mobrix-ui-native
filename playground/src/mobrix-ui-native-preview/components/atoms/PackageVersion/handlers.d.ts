import { SupportedPackageSource } from "../../../types";
export declare const DEFAULT_BRANCH = "main";
export declare const REGISTRIES_HANDLERS: Record<SupportedPackageSource, (name: string, user: string, branch: string, onSuccess: (version: string) => void, onError: (er: any) => void) => void>;
