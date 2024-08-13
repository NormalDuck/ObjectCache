declare class ObjectCache<T extends BasePart> {
    constructor(Template: T, CacheSize?: number , CachesContainer?: Folder )
    Destroy(): void
    ReturnPart(Part: T): void
    GetPart(PartCFrame?: CFrame): T
}

export = ObjectCache