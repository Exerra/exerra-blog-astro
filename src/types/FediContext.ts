export interface FediContext {
    ancestors:   any[];
    descendants: Descendant[];
}

export interface Descendant {
    id:                     string;
    created_at:             Date;
    in_reply_to_id:         string;
    in_reply_to_account_id: string;
    sensitive:              boolean;
    spoiler_text:           string;
    visibility:             Visibility;
    language:               Language | null;
    uri:                    string;
    url:                    string;
    replies_count:          number;
    reblogs_count:          number;
    favourites_count:       number;
    edited_at:              Date | null;
    favourited:             boolean;
    reblogged:              boolean;
    muted:                  boolean;
    bookmarked:             boolean;
    content:                string;
    filtered:               any[];
    reblog:                 null;
    account:                Account;
    media_attachments:      MediaAttachment[];
    mentions:               Mention[];
    tags:                   Tag[];
    emojis:                 Emoji[];
    card:                   Card | null;
    poll:                   null;
    application?:           Application;
}

export interface Account {
    id:              string;
    username:        string;
    acct:            string;
    display_name:    string;
    locked:          boolean;
    bot:             boolean;
    discoverable:    boolean;
    group:           boolean;
    created_at:      Date;
    note:            string;
    url:             string;
    uri:             string;
    avatar:          string;
    avatar_static:   string;
    header:          string;
    header_static:   string;
    followers_count: number;
    following_count: number;
    statuses_count:  number;
    last_status_at:  Date;
    emojis:          Emoji[];
    fields:          Field[];
    noindex?:        boolean;
    roles?:          any[];
}

export interface Emoji {
    shortcode:         string;
    url:               string;
    static_url:        string;
    visible_in_picker: boolean;
}

export interface Field {
    name:        string;
    value:       string;
    verified_at: Date | null;
}

export interface Application {
    name:    string;
    website: string;
}

export interface Card {
    url:               string;
    title:             string;
    description:       string;
    language:          Language | null;
    type:              Type;
    author_name:       string;
    author_url:        string;
    provider_name:     string;
    provider_url:      string;
    html:              string;
    width:             number;
    height:            number;
    image:             null | string;
    image_description: string;
    embed_url:         string;
    blurhash:          null | string;
    published_at:      Date | null;
}

export enum Language {
    De = "de",
    En = "en",
    Fr = "fr",
    Nl = "nl",
}

export enum Type {
    Link = "link",
}

export interface MediaAttachment {
    id:                 string;
    type:               string;
    url:                string;
    preview_url:        string;
    remote_url:         string;
    preview_remote_url: null;
    text_url:           null;
    meta:               Meta;
    description:        null | string;
    blurhash:           string;
}

export interface Meta {
    original: Original;
    small:    Original;
}

export interface Original {
    width:  number;
    height: number;
    size:   string;
    aspect: number;
}

export interface Mention {
    id:       string;
    username: string;
    url:      string;
    acct:     string;
}

export interface Tag {
    name: string;
    url:  string;
}

export enum Visibility {
    Public = "public",
    Unlisted = "unlisted",
}
