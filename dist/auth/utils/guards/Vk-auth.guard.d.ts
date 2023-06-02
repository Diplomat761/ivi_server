import { ExecutionContext } from "@nestjs/common";
declare const VkAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class VkAuthGuard extends VkAuthGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
