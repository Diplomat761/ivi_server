import { CreateImageDto } from "./dto/create-image.dto";
import { UpdateImageDto } from "./dto/update-image.dto";
import { ImagesService } from "./images.service";
export declare class ImagesController {
    private imageService;
    constructor(imageService: ImagesService);
    createPost(dto: CreateImageDto, image: any): Promise<string>;
    getAll(): Promise<import("./images.model").Image[]>;
    getOneImage(id: number): Promise<import("./images.model").Image>;
    updateImage(id: number, dto: UpdateImageDto): Promise<[affectedCount: number, affectedRows: import("./images.model").Image[]]>;
    deleteImage(): Promise<import("./images.model").Image[]>;
    deleteUnusedImages(): Promise<void>;
}
