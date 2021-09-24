FROM node:15.4.0
# ENV TZ=Asia/Tokyo

ENV APP_ROOT /workspace/backend/
RUN mkdir -p $APP_ROOT

WORKDIR $APP_ROOT

COPY backend/package*.json ./
RUN npm install

COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000
