#[macro_use] extern crate rocket;
use std::path::{Path, PathBuf};
use rocket::fs::{NamedFile, relative};


#[get("/dist/<file..>")]
async fn dist(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new(relative!("../dist")).join(&file)).await.ok()
}

#[get("/<_..>")]
async fn index() -> Option<NamedFile> {
    NamedFile::open(Path::new(relative!("../client/public/index.html"))).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index,dist])   
}