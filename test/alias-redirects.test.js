const supertest = require("supertest");
const app = require("../src/server");
const request = supertest(app);

it("redirects /download to desktop website", async () => {
  const req = await request
    .get("/download")
    .set("Host", "localhost")
    .expect(302);
  expect(req.headers["location"]).toBe("https://desktop.turbowarp.org/");
});
it("redirects /download/ to desktop website", async () => {
  const req = await request
    .get("/download/")
    .set("Host", "localhost")
    .expect(302);
  expect(req.headers["location"]).toBe("https://desktop.turbowarp.org/");
});
it("redirects /desktop to desktop website", async () => {
  const req = await request
    .get("/desktop")
    .set("Host", "localhost")
    .expect(302);
  expect(req.headers["location"]).toBe("https://desktop.turbowarp.org/");
});
it("redirects /desktop/ to desktop website", async () => {
  const req = await request
    .get("/desktop/")
    .set("Host", "localhost")
    .expect(302);
  expect(req.headers["location"]).toBe("https://desktop.turbowarp.org/");
});

it("redirects /packager to packager website", async () => {
  const req = await request
    .get("/packager")
    .set("Host", "localhost")
    .expect(302);
  expect(req.headers["location"]).toBe("https://kakaomames.github.io/Scratch-packager/");
});
it("redirects /packager/ to packager website", async () => {
  const req = await request
    .get("/packager/")
    .set("Host", "localhost")
    .expect(302);
  expect(req.headers["location"]).toBe("https://kakaomames.github.io/Scratch-packager/");
});

it("redirects /donate to a donation page", async () => {
  const req = await request.get("/donate").set("Host", "localhost").expect(302);
});
