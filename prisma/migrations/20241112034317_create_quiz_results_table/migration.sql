-- CreateTable
CREATE TABLE "QuizResult" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "quizLevel" TEXT NOT NULL,
    "quizTopic" TEXT NOT NULL,
    "marks" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuizResult_pkey" PRIMARY KEY ("id")
);
