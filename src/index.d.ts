declare class ObjectCache<T extends BasePart | Model> {
    constructor(Template: T, CacheSize?: number , CachesContainer?: Folder )
    Destroy(): void
    ReturnPart(Part: T): void
    GetPart(PartCFrame?: CFrame): T
    ExpandCache(Amount: number): void
    SetExpandAmount(Amount: number): void
    IsInUse(Object: T): boolean
}

export = ObjectCache