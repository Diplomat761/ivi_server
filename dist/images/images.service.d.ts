import { FilesService } from "src/files/files.service";
import { CreateImageDto } from "./dto/create-image.dto";
import { Image } from "./images.model";
export declare class ImagesService {
    private imageRepository;
    private fileService;
    constructor(imageRepository: typeof Image, fileService: FilesService);
    create(dto: CreateImageDto, image: any): Promise<string>;
    getAllImages(): Promise<Image[]>;
    getImageById(id: number): Promise<Image>;
    updateImage(id: number, { tableName, recordId }: {
        tableName: any;
        recordId: any;
    }): Promise<[affectedCount: number, affectedRows: Image[]]>;
    deleteByTime(): Promise<Image[]>;
    deleteUnusedImages(): Promise<void>;
}
