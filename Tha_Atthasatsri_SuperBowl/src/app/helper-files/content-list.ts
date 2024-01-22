// content-list.ts
import Content from './content-interface';

export class Contentlist {
    static contentCount = 0
    private _items: Content[];

    constructor() {
        this._items = []; // initiallize array
    }


    get Items() : Content[] {
        return this._items;
    }


    displayFriendlyHtml(index : number) {
        const content = this._items[index];

        return `
        <p>ID: ${content.id}</p>
        <p>Title: ${content.title}</p>
        <p>Description: ${content.description}</p>
        <p>Creator: ${content.creator}</p>
        <p>Type: ${content.type}</p>
        // <p>Img: ${content.imgUrl}</p>
        <img src = ${content.imgUrl}></img>
        <p>Tag: ${content.tags}</p>
        `
    }

    increaseCount(): number {
    return ++Contentlist.contentCount;
  }

  addContent(contentItem: Content): void {
    this._items.push(contentItem);
  }

}

